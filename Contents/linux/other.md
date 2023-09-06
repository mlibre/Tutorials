---
sidebar_position: 16
tags:
  - Linux
  - XDG
  - Automatic
  - Shutdown
---

# Autostart

## Init

the `init` command refers to the process initialization system. It's the first process that gets started by the kernel during system boot, and it's assigned the process `ID (PID) of 1`

```bash
which init
# Output: /usr/bin/init

readlink -f /usr/bin/init
# Output: /usr/lib/systemd/systemd

ps -p 1
# Output:
# PID TTY          TIME CMD
#   1 ?        00:00:01 systemd

pstree -p 1
# Output:
# systemd(1)─┬─...
```

## Scripts and programs locations

* nano .profile
* nano /etc/profile
* nano ~/.bash_profile
* nano .bashrc
* nano /etc/bash.bashrc
* ls /etc/profile.d/
* ls ~/.config/autostart
* ls /etc/xdg/autostart
* ls /usr/share/xsessions
* ls -1 /lib/systemd/system/*.service /etc/systemd/system/*.service
* ls usr/share/dbus-1/system-services/
* sudo systemctl list-unit-files --type=service --state=enabled --all
* ls /etc/init.d/
* nano ~/.xinitrc
* nano /etc/X11/xinit/xinitrc
* ls /etc/X11/xinit/xinitrc.d/
* cat ~/.xserverrc
* ls /etc/pam.d/
* ls /etc/rc*
* cat /etc/xdg/lxsession/LXDE/autostart
* ls ~/.config/lxsession/LXDE/autostart
* crontab -e
* sudo crontab -e
* ls -rla /etc/cron.*
* cat /usr/lib/sddm/sddm.conf.d/default.conf
* cat /etc/sddm.conf.d/00_manjaro_settings.conf

# Automatic Shutdown

|      Command      |            Description            |
| :---------------: | :-------------------------------: |
|  `shutdown now`   | Shutdown the system immediately.  |
| `shutdown -h +5`  | Shutdown the system in 5 minutes. |
| `shutdown -r now` |  Reboot the system immediately.   |
| `shutdown -r +10` | Reboot the system in 10 minutes.  |
| `shutdown -H now` |   Halt the system immediately.    |
|   `shutdown +5`   | Shutdown the system in 5 minutes. |

## Reading symlinks

```bash
readlink /bin/init
# ../lib/systemd/systemd
```

## System Info

```bash
uname -a
```

# Install a new os on the phone

## Backup data

```bash
sudo pacman -S android-tools
sudo adb devices
adb backup -apk -shared -all -f backup-file.ab
```

## Restore

```bash
adb restore file.ab
```

## Enable Developer options

* Several times clicks on the kernel tab
* Allow OEM unlocking
* Enter Download mod:
  1. Turn off the phone.  
  2. Hold vol key up + down.
  3. Now in the warning message page. choose "unlocking bootloader" that will perform a factory reset

## Install odin tools for Samsung >= 3.14

<https://samsungodin.com/>

## Install samsung driver

<https://developer.samsung.com/android-usb-driver>

## Install adb

<https://developer.android.com/studio/releases/platform-tools>

```bash
adb reboot download
```

## Download TWRP

<https://www.droidthunder.com/install-twrp-recovery-on-galaxy-A10/>
<https://twrp.me/samsung/samsunggalaxya10.html>

## convert it to .md5

<https://www.droidthunder.com/convert-img-to-tar-md5/>

## Run Odin as administrator

follow the instructions
<https://www.droidthunder.com/install-twrp-recovery-on-galaxy-A10/>

## Windows 11

### Make boatable usb

### WoeUsb

```bash
sudo pacman -Suy p7zip python-pip python-wxpython
git clone https://github.com/WoeUSB/WoeUSB-ng.git
sudo pip3 install .
sudo woeusb --workaround-skip-grub --target-filesystem NTFS --device ~/Win11_22H2_English_x64v1.iso  /dev/sdb
```

### Win2USB

```bash
https://github.com/ValdikSS/windows2usb
chmod +x windows2usb*
./windows2usb-0.2.4-x86_64.AppImage /dev/sdb ~/Win11_22H2_English_x64v1.iso gpt+uefintfs
```

### Things to do after installing Windows 11

* Download and install all the updates
* Enable Ransomware protection
* Download DimScreen, Copy it to the download folder. Open. click on the settings. set brightness to 20%. Make a shortcut to the desktop
* search for gamma calibration in windows settings. set it to minimum
* Adjust date and time: auto. Timezone tehran +3:30
* Downloading updates active hours: 24 hours format. 1->11
* Disable all data usages settings in privacy and security
* uninstall mail, teams, one drive. xbox, facebook, microsoft todo, sticky notes, tips, weather
* Install firefox and login
* Install protonVPN
* personalize: sunrise
* network connection: metered connection
* Display: 3840x2160, 200%
* Steam: add your games' location to the Games' folder library. make it as default
* Steam: If your games are in a `NTFS` file system, follow [this](https://github.com/ValveSoftware/Proton/wiki/Using-a-NTFS-disk-with-Linux-and-Windows) to make game compatible with Linux.
* Pause windows updates for 5 weeks
* Check windows startups apps
* App store: disable automatic update
* Leave from "AMD user experience program". AMD settings -> last tab -> last option
* windows features: WSL, virtual machine, hyper-v (for android and linux apps)
* wsl --update
* wsl --install -d Ubuntu
* Disable Error Reporting: WIN+R -> services.msc -> Windows Error Reporting Service -> Properties -> disable