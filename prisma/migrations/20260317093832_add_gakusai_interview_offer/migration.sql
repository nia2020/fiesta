-- CreateTable
CREATE TABLE "GakusaiInterviewOffer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "inviteToken" TEXT NOT NULL,
    "chairpersonName" TEXT NOT NULL,
    "university" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "conversation" TEXT,
    "articleId" TEXT,
    "expiresAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "GakusaiInterviewOffer_inviteToken_key" ON "GakusaiInterviewOffer"("inviteToken");
