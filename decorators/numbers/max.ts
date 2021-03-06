import { decorate } from "../../utils/decorate.ts";
import { isNumber } from "./is_number.ts";

/**
 * Checks a property is lower than or equal to a given number.
 */
export function Max(value: number) {
  return decorate({
    typeChecker: isNumber,
    validationFunction: (property) => {
      return property <= value;
    },
    message: `This field should be lower than or equal to ${value}.`,
  });
}
