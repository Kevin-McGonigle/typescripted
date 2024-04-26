import { server } from "./test/mocks/server"
import "@testing-library/jest-dom/vitest"
import { afterAll, afterEach, beforeAll } from "vitest"

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
