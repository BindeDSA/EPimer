class PiRequest {

    static piOne = "3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067"
    static piTwo = "9821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819"

    static piHundrendsArr = [this.piOne, this.piTwo];

    static getDigitSet(hundrends, pi = true) {
        return pi ? this.piHundrendsArr[hundrends] : ""
    }

    static getDigits(depth, num = 1) {
        let hundred = this.getDigitSet(Math.floor(depth / 100))
        let tensDepth = depth % 100
        return(hundred.slice(tensDepth, tensDepth + num))
    }

    returnAccurate(depth) {

    }
}

export default PiRequest