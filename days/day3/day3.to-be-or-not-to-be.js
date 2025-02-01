export default function myExpect(val){
    return {
        /**
         * Accepts another value and returns true if the two values === each other.
         * If they are not equal, it should throw an error "Not Equal".
         * @param a
         * @return {boolean}
         */
        toBe: function (a) {
            if (val === a) {
                return true;
            }
            throw "Not Equal";
        },
        /**
         * Accepts another value and returns true if the two values !== each other.
         * If they are equal, it should throw an error "Equal".
         * @param a
         * @return {boolean}
         */
        notToBe: function (a) {
            if (val !== a) {
                return true;
            }
            throw "Equal";
        }
    }
}