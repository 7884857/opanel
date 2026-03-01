package net.opanel.utils;

import oshi.SystemInfo;
import oshi.hardware.GlobalMemory;

public class MonitorUtility {
    public static double getCpuRate(SystemInfo si) {
        double loadPercentage = si.getHardware().getProcessor().getSystemCpuLoad(500) * 100;
        return Math.round(loadPercentage);
    }

    public static double getMemoryRate(SystemInfo si) {
        GlobalMemory gm = si.getHardware().getMemory();

        long total = gm.getTotal();
        long available = gm.getAvailable();
        long used = total - available;

        double rate = ((double) used / total) * 100;

        return Math.round(rate);
    }
}
