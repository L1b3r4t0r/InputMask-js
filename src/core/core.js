// (c)2015 Matheus Silva MIT license
class inputMask {
    constructor(configObject){
        // Get configuration object values
        this.strict          = configObject.strict || false;
        this.element         = configObject.element;
        this.custom          = configObject.custom || false;
        this.default         = configObject.default || "numberOnly";
        this.customSeparator = configObject.customSeparator || false;
        this.customMaskChars = [];
        // Define the regexes
        this.num = "/9/";
        this.alp = "/A/";
        this.cus = "/\(([A-z0-9])\)\{([A-z0-9]+)\}/g";
        // Compile the regexes
        var num = new RegExp(this.num);
        var alp = new RegExp(this.alp);
        var cus = new RegExp(this.cus);
        // ===================================
        // Parse custom mask definition if any
        if (this.custom !== false && this.customSeparator !== false) {  
            if ((m = cus.exec(this.custom)) !== null) {
                if (m.index === re.lastIndex) {
                    re.lastIndex++;
                }
            }
            this.customMaskChars[m[1]] = m[2];
        };
    }
}