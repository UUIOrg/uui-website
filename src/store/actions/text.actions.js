import { TEST_ADD } from "../actions"

export const TEST_INCREMENT = _ => {
    return {
        type : TEST_ADD,
        payload : 1
    }
}