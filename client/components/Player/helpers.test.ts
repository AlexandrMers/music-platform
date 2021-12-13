import { formatTime } from "./helpers";

describe("client/components/Player/helpers/formatTime", () => {
  describe('function should format seconds to format "minutes:seconds" -> 0:00', () => {
    describe("seconds", () => {
      it("0 -> 0:00", () => {
        expect(formatTime(0)).toBe("0:00");
      });
      it("7 -> 0:07", () => {
        expect(formatTime(7)).toBe("0:07");
      });
      it("10 -> 0:10", () => {
        expect(formatTime(10)).toBe("0:10");
      });
      it("15 -> 0:15", () => {
        expect(formatTime(15)).toBe("0:15");
      });
      it("25 -> 0:25", () => {
        expect(formatTime(25)).toBe("0:25");
      });
    });
    describe("with minutes", () => {
      it("60 -> 1:00", () => {
        expect(formatTime(60)).toBe("1:00");
      });
      it("80 -> 1:20", () => {
        expect(formatTime(80)).toBe("1:20");
      });
      it("85 -> 1:25", () => {
        expect(formatTime(85)).toBe("1:25");
      });
      it("93 -> 1:33", () => {
        expect(formatTime(93)).toBe("1:33");
      });
      it("125 -> 2:05", () => {
        expect(formatTime(125)).toBe("2:05");
      });
    });
  });
});
