-- CreateTable
CREATE TABLE "qr" (
    "base64" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "qrcode" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Groups" (
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "qr_id_key" ON "qr"("id");

-- CreateIndex
CREATE UNIQUE INDEX "qr_qrcode_key" ON "qr"("qrcode");

-- CreateIndex
CREATE UNIQUE INDEX "Groups_id_key" ON "Groups"("id");
