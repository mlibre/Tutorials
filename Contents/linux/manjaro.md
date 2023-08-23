---
sidebar_position: 5
tags:
  - Linux
  - Manjaro
---

# Manjaro/Arch Linux

## Things to do before installing

* Backup important data. Recovery-keys, Passwords, Postman and ...  

```bash
cp -rf /home/mlibre/.local/share/TelegramDesktop /run/media/mlibre/D/caches
cp $HISTFILE /run/media/mlibre/D/caches/
rsync -aAXHv ~/my_data/ /run/media/mlibre/H/OS/my_data/
sudo cp -r /etc /run/media/mlibre/D/caches/
# ./data_rsync.bash
# Copy systemctl units
```

* Mark EFI partition while installing Manjaro/Arch Linux as /boot/efi. Don't check Format option.

## Things to do after installing

* Remove and disable unnecessary packages

  ```bash
  echo "$USER ALL=(ALL:ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/$USER
  sudo systemctl disable pamac-daemon
  sudo systemctl disable pamac-mirrorlist.timer
  sudo systemctl disable pamac-mirrorlist.service
  sudo pacman -R manjaro-hello web-installer-url-handler matray print-manager samba kdenetwork-filesharing thunderbird hplip cups yakuake manjaro-printer gutenprint cups-pdf snapd libpamac-snap-plugin flatpak libpamac-flatpak-plugin bluedevil timeshift timeshift-autosnap-manjaro pamac-tray-icon-plasma kdeconnect vde2  qemu-common qemu-system-arm qemu-user-static-binfmt qemu-system-arm-firmware scrcpy
  ```

* Pacman downloads parallel

  ```bash
  sudo nano /etc/pacman.conf
  ParallelDownloads = 5
  ```
  
* Upgrade

  ```bash
  pamac update --force-refresh
  sudo pacman-mirrors --fasttrack
  sudo pacman -Syyuu
  sudo pacman -S telegram-desktop unzip thermald ntfs-3g
  sudo systemctl enable --now thermald.service
  pamac install visual-studio-code-bin onlyoffice-bin microsoft-edge-stable-bin
  ```

* Import Data

  ```bash
  cp -r /run/media/mlibre/H/OS/caches/TelegramDesktop /home/mlibre/.local/share/
  cp -r /run/media/mlibre/H/OS/my_data/ ~/my_data
  # ./import_data.bash
  ```

* Make an XDG autostart script for gamma adjustment
* Put the gamma script in the `.bashrc` and `.zshrc` as well

* Install ProtonVPN, mailspring, shadowsocks, Nekoray
  
  ```bash
  sudo pamac install shadowsocks-rust-bin
  pamac build protonvpn
  pamac build mailspring
  ```

* Remove Mainspring from startups. Use 24-hour clock. Uncheck automatically load images. Disabsetle mail signature.

* Install mlocate

  ```bash
  sudo pacman -S mlocate
  sudo updatedb
  ```
  
* KDE Settings -> Disable Mouse acceleration
* KDE Settings -> Startup and Shutdown: Start with empty session, Choose KDE Screen Saver, Review background services and Autostarts.
* KDE Settings -> Appearance -> Theme -> Breeze Dark, Breath Dark
* KDE Settings -> Appearance -> Font -> Enabled Anti-Aliasing, RGB, Slight. all +1 PT
* KDE Settings -> Workspace -> Search -> Disable Web Search Keywords
* KDE Settings -> Workspace Behavior -> Activities -> Privacy -> Dont remember soft
* KDE Settings -> Search for kRunner -> settings -> uncheck all

* Pin Firefox, Terminal, ProtonVPN, Kate and VSCode to the panel
* Software Center: Disable automatic updates, Add AUR support
* Remove Virtual Desktops
* Remembers sudo password

  ```bash
  sudo nano /etc/sudoers
  Defaults        timestamp_timeout=300 # 5 hours
  ```

* Make a Swapfile

```bash
sudo dd if=/dev/zero of=/swapfile bs=1M count=4096 status=progress
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
cat /etc/fstab
sudo bash -c "echo /swapfile none swap defaults 0 0 >> /etc/fstab"

sudo nano /etc/sysctl.conf
# vm.swappiness=10
```

* Fix time difference between linux and windows

  ```bash
  sudo timedatectl set-local-rtc 1 --adjust-system-clock
  # sudo timedatectl set-local-rtc 1
  sudo ntpdate time.nist.gov # update time
  ```

* Softwares

```bash
sudo pacman -S qbittorrent firefox libreoffice-fresh meld vlc ntfs-3g  aria2 ttf-ubuntu-font-family gnome-keyring libsecret core/iputils clinfo tor torsocks steam-native-runtime
# sudo pacman -S electrum gimp gparted firewalld clamav deluge
```

* Firefox: Enable DNS over HTTPS
* Enable automatic mounting of external drives: Settings -> Hardware -> Removable Storage -> Automount
* Konsole config:
  * Font: Monospace 13pt
  * Theme: Breath (customized, a bit darker)
  * Shell: Manjaro zsh

* Steam: Allow auto-update only between 1AM - 11AM

* Performance

```bash
sudo systemctl disable bluetooth.service
sudo systemctl disable tor.service
sudo systemctl disable samba
sudo systemctl disable cups
balooctl disable && balooctl purge &&
sudo rm /etc/cron.d/0hourly
sudo rm /etc/xdg/autostart/baloo_file.desktop
sudo rm /etc/xdg/autostart/pamac-tray-budgie.desktop
sudo rm /etc/xdg/autostart/pamac-tray.desktop
sudo rm /etc/xdg/autostart/msm_kde_notifier.desktop
sudo rm /etc/xdg/autostart/org.gnome.SettingsDaemon*
sudo rm /etc/xdg/autostart/print-applet.desktop

# sudo systemctl enable firewalld
# sudo systemctl restart firewalld

# sudo firewall-cmd --permanent --add-service=https
# sudo firewall-cmd --permanent --add-port=30303/tcp
# sudo firewall-cmd --permanent --add-port=30303/udp

# sudo systemctl restart --now clamav-daemon
# sudo freshclam
# clamscan --recursive --infected /home
# sudo systemctl disable --now clamav-freshclam
# sudo systemctl disable --now clamav-daemon
# sudo systemctl enable --now clamav-daemon
# sudo systemctl enable --now clamav-freshclam
```

## AMDGPU

## TearFree, EnablePageFlip, DRI3

```bash
# settings files
/usr/share/X11/xorg.conf.d/
/etc/X11/xorg.conf.d/

sudo nano /usr/share/X11/xorg.conf.d/10-amdgpu.conf

Section "OutputClass"
    Identifier "AMDgpu"
    MatchDriver "amdgpu"
    Driver "amdgpu"
    Option "TearFree" "true"
    Option "DRI" "3"
    Option "EnablePageFlip" "on"
EndSection

cat /var/log/Xorg.0.log | grep -i tear
```

## Reducing DRI latency

```bash
sudo nano /etc/drirc

<driconf>
   <device>
       <application name="Default">
           <option name="vblank_mode" value="0" />
       </application>
   </device>
</driconf>
```

## check xorg config file

```bash
sudo Xorg -config /usr/share/X11/xorg.conf.d/10-amdgpu.conf
```

## Blocking radon

```bash
sudo nano /etc/modprobe.d/radeon.conf

blacklist radeon
```

## Install AMDGPU-PRO

```bash
# https://wiki.archlinux.org/title/AMDGPU_PRO
pamac install vulkan-amdgpu-pro lib32-vulkan-amdgpu-pro 
pamac install amdgpu-pro-oglp lib32-amdgpu-pro-oglp 
# pamac install amdgpu-pro-libgl lib32-amdgpu-pro-libgl
# pamac install opencl-amd
# pamac install amf-amdgpu-pro
glxinfo | grep "OpenGL vendor string"
lspci -v | grep -A 10 VGA
vk_pro steam
```

## Uninstall AMDGPU-PRO

```bash
pacman -R $(pacman -Qg Radeon_Software_for_Linux | cut -f2 -d" ")
```

## Blacklist Radeon

```bash
sudo nano /etc/modprobe.d/radeon.conf 
blacklist radeon
```

## Install Wine

```bash
# pamac install wine-stable
sudo pacman -S wine winetricks
winetricks corefonts vcrun2013 vcrun2015 winhttp allcodecs d3dcompiler_42 d3dcompiler_43 d3dcompiler_47 d3dx9 dotnet dxvk quartz
sudo setcap cap_net_raw+epi /usr/bin/wine
```