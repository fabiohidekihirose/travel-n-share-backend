/*
  Warnings:

  - Added the required column `bio` to the `user_account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "post" ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "user_account" ADD COLUMN     "bio" TEXT NOT NULL;
