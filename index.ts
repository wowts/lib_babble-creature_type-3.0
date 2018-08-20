import { LuaObj } from "@wowts/lua";

export class LibBabbleCreatureType {
    public GetLookupTable(): LuaObj<string> {
        return {};
    }
}
const lib = new LibBabbleCreatureType();
export default lib;
