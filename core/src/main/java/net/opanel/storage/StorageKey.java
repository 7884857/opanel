package net.opanel.storage;

public enum StorageKey {
    SCHEDULED_TASKS("scheduled-tasks"),
    MCP_CONFIG("mcp-config"),
    OPEN_API_CONFIG("open-api");

    private final String id;

    StorageKey(String id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return id;
    }
}
