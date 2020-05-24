class PiRequest {

    static pi1 = '3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067';
    static pi2 = '9821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819';
    static pi3 = '6442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127';
    static pi4 = '3724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609';
    static pi5 = '4330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491';


    static piHundrendsArr = [this.pi1, this.pi2, this.pi3, this.pi4, this.pi5];

    static getDigitSet(hundrends, pi = true) {
        return pi ? this.piHundrendsArr[hundrends] : ''
    }

    static getDigits(depth, num = 1) {
        let hundred = this.getDigitSet(Math.floor(depth / 100))
        let tensDepth = depth % 100
        return (hundred.slice(tensDepth, tensDepth + num))
    }

    returnAccurate(depth) {

    }
}

export default PiRequest