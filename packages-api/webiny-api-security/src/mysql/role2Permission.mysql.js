import { MySQLTable } from "webiny-api";

class Role2Permission extends MySQLTable {
    constructor() {
        super();
        this.column("role")
            .char(24)
            .setNotNull();
        this.column("permission")
            .char(24)
            .setNotNull();

        this.index("unique").unique("permission", "role");
    }
}

Role2Permission.setName("Security_Role2Permission");

export default Role2Permission;
