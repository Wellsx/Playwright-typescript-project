// @ts-check
import { test, expect } from "../pages/pages";

test.describe("User account test suite", () => {
  test.use({ storageState: "../playwright/.auth/user.json" });
});
