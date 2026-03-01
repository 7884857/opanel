package net.opanel.utils;

import oshi.SystemInfo;
import oshi.hardware.GlobalMemory;
import oshi.hardware.CentralProcessor;

public class MonitorUtility {
    public static class CpuSampler {
        private final CentralProcessor processor;
        private long[] prevTicks;

        public CpuSampler(SystemInfo si) {
            this.processor = si.getHardware().getProcessor();
            this.prevTicks = processor.getSystemCpuLoadTicks();
        }

        public synchronized double sampleRate() {
            double load = processor.getSystemCpuLoadBetweenTicks(prevTicks);
            prevTicks = processor.getSystemCpuLoadTicks();

            double rounded = Math.round(load * 100);
            return Math.max(0, Math.min(100, rounded));
        }
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
