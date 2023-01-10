#include "edit_custom.h"
#include "ui_edit_custom.h"

#include "qv2ray/v2/ui/widgets/editors/w_JsonEditor.hpp"
#include "fmt/CustomBean.hpp"
#include "fmt/Preset.hpp"

EditCustom::EditCustom(QWidget *parent) : QWidget(parent), ui(new Ui::EditCustom) {
    ui->setupUi(this);
    ui->config_simple->setPlaceholderText(
        "example:\n"
        "  server-address: \"127.0.0.1:%mapping_port%\"\n"
        "  listen-address: \"127.0.0.1\"\n"
        "  listen-port: %socks_port%\n"
        "  host: your-domain.com\n"
        "  sni: your-domain.com\n");
}

EditCustom::~EditCustom() {
    delete ui;
}

void EditCustom::onStart(QSharedPointer<NekoRay::ProxyEntity> _ent) {
    this->ent = _ent;
    auto bean = this->ent->CustomBean();

    // load known core
    auto core_map = QString2QJsonObject(NekoRay::dataStore->extraCore->core_map);
    for (const auto &key: core_map.keys()) {
        if (key == "naive" || key == "hysteria") continue;
        ui->core->addItem(key);
    }
    if (preset_core == "hysteria") {
        preset_command = Preset::Hysteria::command;
        preset_config = Preset::Hysteria::config;
        ui->config_simple->setPlaceholderText("");
        ui->core->hide();
        ui->core_l->setText(tr("Please read the documentation. If you don't understand, use a share link instead."));
    } else if (preset_core == "internal") {
        preset_command = preset_config = "";
        ui->config_simple->setPlaceholderText(
            "{\n"
            "    \"type\": \"socks\",\n"
            "    // ...\n"
            "}");
    }

    // load core ui
    P_LOAD_COMBO(core)
    ui->command->setText(bean->command.join(" "));
    P_LOAD_STRING(config_simple)
    P_LOAD_COMBO(config_suffix)

    // custom external
    if (!bean->core.isEmpty()) {
        ui->core->setDisabled(true);
    } else if (!preset_core.isEmpty()) {
        bean->core = preset_core;
        ui->core->setDisabled(true);
        ui->core->setCurrentText(preset_core);
        ui->command->setText(preset_command);
        ui->config_simple->setText(preset_config);
    }

    // custom internal
    if (preset_core == "internal") {
        ui->core->hide();
        ui->core_l->setText(tr("Outbound JSON, please read the documentation."));
        ui->command->hide();
        ui->command_l->hide();
        ui->config_suffix->hide();
        ui->config_suffix_l->hide();
    }

    // Generators
    ui->generator->setVisible(false);
}

bool EditCustom::onEnd() {
    auto bean = this->ent->CustomBean();

    P_SAVE_COMBO(core)
    bean->command = ui->command->text().split(" ");
    P_SAVE_STRING_QTEXTEDIT(config_simple)
    P_SAVE_COMBO(config_suffix)

    if (bean->core.isEmpty()) {
        MessageBoxWarning(software_name, tr("Please pick a core."));
        return false;
    }

    return true;
}

void EditCustom::on_as_json_clicked() {
    auto editor = new JsonEditor(QString2QJsonObject(ui->config_simple->toPlainText()), this);
    auto result = editor->OpenEditor();
    if (!result.isEmpty()) {
        ui->config_simple->setText(QJsonObject2QString(result, false));
    }
}
