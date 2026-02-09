-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "filename" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "support" BOOLEAN NOT NULL DEFAULT false,
    "cost" TEXT,
    "customCharacter" BOOLEAN NOT NULL
);
INSERT INTO "new_PCard" ("cost", "customCharacter", "filename", "id", "name", "plan", "rarity", "type") SELECT "cost", "customCharacter", "filename", "id", "name", "plan", "rarity", "type" FROM "PCard";
DROP TABLE "PCard";
ALTER TABLE "new_PCard" RENAME TO "PCard";
CREATE UNIQUE INDEX "PCard_filename_key" ON "PCard"("filename");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
