package net.opanel.spigot_26_1;

import net.opanel.bukkit_helper.BaseBukkitSave;
import net.opanel.common.OPanelSave;
import org.bukkit.Server;

import java.nio.file.Path;

public class SpigotSave extends BaseBukkitSave implements OPanelSave {
    public SpigotSave(Main plugin, Server server, Path path) {
        super(plugin, server, path);
    }
}
