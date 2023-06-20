import { getFioParts } from "../../utils/getFIO";


describe("getFioParts работает корректно", () => {
  it("should retern correctly array length", () => {
    const fio = "Братковская Александра Викторовна";
    const expected = 3;
    const result = getFioParts(fio)

    expect(result.length).toBe(expected);
  })

  it("should retern correctly array", () => {
    const fio = "Братковская Александра Викторовна";
    const result = getFioParts(fio)

    expect(result).toContain("Братковская");
  })

  it("should retern correctly array", () => {
    const fio = "Братковская Александра Викторовна";
    const expected = ["Братковская", "Александра", "Викторовна"];
    const result = getFioParts(fio)

    expect(result).toEqual(expected);
  })
});
