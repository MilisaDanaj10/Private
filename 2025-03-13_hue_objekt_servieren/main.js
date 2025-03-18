import { Hono } from "https://deno.land/x/hono@v3.10.0/mod.ts";
import { serveStatic } from "https://deno.land/x/hono@v3.10.0/middleware.ts";

const app = new Hono();
const car = {
    brand: "Ford",
    model: "Mustang",
    year: 1969,
    color: "red",
    extras: [
        "Leather Seats",
        "Sport Package",
        "Premium Sound",
        "Navigation System"
    ],
};

// serve index.html
app.get("/", serveStatic({ path: "./static/index.html" }));
app.get("/car", async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return c.json(car);
});
app.get("*", serveStatic({ root: "./static" }));

Deno.serve(app.fetch);