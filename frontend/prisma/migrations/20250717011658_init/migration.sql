-- CreateTable
CREATE TABLE "PCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "filename" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "cost" TEXT,
    "customCharacter" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PCard_filename_key" ON "PCard"("filename");
