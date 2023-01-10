#pragma once

#include <QWidget>
#include "profile_editor.h"

QT_BEGIN_NAMESPACE
namespace Ui {
    class EditVMess;
}
QT_END_NAMESPACE

class EditVMess : public QWidget, public ProfileEditor {
    Q_OBJECT

public:
    explicit EditVMess(QWidget *parent = nullptr);

    ~EditVMess() override;

    void onStart(QSharedPointer<NekoRay::ProxyEntity> _ent) override;

    bool onEnd() override;

private:
    Ui::EditVMess *ui;
    QSharedPointer<NekoRay::ProxyEntity> ent;
};
