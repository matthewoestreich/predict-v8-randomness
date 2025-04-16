import { runPredictor } from "./runPredictor";

describe("Bin (CLI) : Dynamically Generated Sequence", () => {
  it("should predict the next five random numbers", async () => {
    const result = await runPredictor({ seeds: 5, predictions: 5 });
    expect(result.mode).toBe("seeds");
    expect(result.predictions).toEqual(result.actual);
  });
});

describe("Bin (CLI) : User Provided Sequence", () => {
  it("should predict the next five random numbers", async () => {
    const USER_PROVIDED_SEQUENCE = [
      0.34976166449621826,
      0.6365063365192662,
      0.1561153962043036,
      0.856013937923775,
      0.41010231718358936
    ];
  
    const EXPECTED_NEXT_FIVE_NUMBERS = [
      0.08905966816207322,
      0.30334558505429565,
      0.40213861949121776,
      0.9458201944286209,
      0.8958730034145181,
    ];

    const result = await runPredictor({ sequence: USER_PROVIDED_SEQUENCE, predictions: 5 });
    expect(result.mode).toBe("sequence");
    expect(result.predictions).toEqual(EXPECTED_NEXT_FIVE_NUMBERS);
  });
});

describe("Bin (CLI) : yargs functionality", () => {
  it("should throw if neither seeds nor sequence is provided", async () => {
    await expect(
      runPredictor({ predictions: 5 } as any)
    ).rejects.toThrow(/provide either --seeds or --sequence/);
  });
});
