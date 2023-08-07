export class UtilClass{
    static convertLdapSearchResultToString(entry: any): string{
        if(typeof entry === 'string'){
            return entry;
        }
        else if(Array.isArray(entry)){
            return entry.join(' ');
        }
        else{
            throw(`Invalid type: ${typeof entry}`);
        }
    }
}