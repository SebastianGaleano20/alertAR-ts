import { describe, it, expect, vi } from "vitest";
import { checkSession } from "@/firebase/server";
import { getAuth } from "firebase-admin/auth";

// Mock implementation of `getAuth` and `verifySessionCookie`
const mockVerifySessionCookie = vi.fn();
vi.mock("firebase-admin/auth", () => {
  return {
    getAuth: vi.fn(() => ({
      verifySessionCookie: mockVerifySessionCookie,
    })),
  };
});

describe("checkSession", () => {
  it("returns isAuthenticated true when session cookie is valid", async () => {
    mockVerifySessionCookie.mockResolvedValueOnce({ uid: "test-user" });

    const result = await checkSession("valid-session-cookie");

    expect(result).toEqual({
      isAuthenticated: true,
      redirectUrl: "/chat",
    });

    expect(mockVerifySessionCookie).toHaveBeenCalledWith(
      "valid-session-cookie"
    );
  });

  it("returns isAuthenticated false with an error for an invalid session", async () => {
    mockVerifySessionCookie.mockRejectedValueOnce(new Error("Invalid session"));

    const result = await checkSession("invalid-session-cookie");

    expect(result).toEqual({
      isAuthenticated: false,
      error: "Invalid session",
    });
  });

  it("returns isAuthenticated false when no session cookie is provided", async () => {
    const result = await checkSession("");

    expect(result).toEqual({
      isAuthenticated: false,
    });
  });
});
