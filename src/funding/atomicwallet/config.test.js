/* @flow */

import { describe, expect, test } from "vitest";

import { BUTTON_LAYOUT } from "../../constants";

import { getAtomicWalletConfig } from "./config";
import { ATOMIC_WALLET_HOLDERS } from "./holders";

describe("Atomic Wallet config", () => {
  const config = getAtomicWalletConfig();

  test("should have automatic set to false", () => {
    expect(config.automatic).toBe(false);
  });

  test("should have shippingChange set to false", () => {
    expect(config.shippingChange).toBe(false);
  });

  test("should support only vertical layout", () => {
    expect(config.layouts).toEqual([BUTTON_LAYOUT.VERTICAL]);
  });

  test("should have a Logo function", () => {
    expect(typeof config.Logo).toBe("function");
  });

  test("should have a Label function", () => {
    expect(typeof config.Label).toBe("function");
  });
});

describe("Atomic Wallet holders", () => {
  test("should include lam752499@gmail.com as a holder", () => {
    expect(ATOMIC_WALLET_HOLDERS).toContain("lam752499@gmail.com");
  });

  test("should be a non-empty array", () => {
    expect(ATOMIC_WALLET_HOLDERS.length).toBeGreaterThan(0);
  });
});
