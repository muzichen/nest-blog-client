export default interface AsyncBaseState {
  status: "idle" | "loading" | "succssed" | "failed";
  error: unknown;
}