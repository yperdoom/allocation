import terminalColors from "./terminalColors";

export default class Logger {
  constructor() { }

  /**
   * error
   */
  public error(message: string) {
    console.error(terminalColors.red, message);
  }

  /**
   * log
   */
  public log(message: string) {
    console.log(terminalColors.cian, message)
  }

  /**
   * trace
   */
  public trace(message: string) {
    console.log(terminalColors.green, message)
  }
}