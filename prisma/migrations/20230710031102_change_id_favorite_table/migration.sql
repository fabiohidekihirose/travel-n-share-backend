/*
  Warnings:

  - The primary key for the `favorite` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `favorite` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "favorite" DROP CONSTRAINT "favorite_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "favorite_pkey" PRIMARY KEY ("user_id", "post_id");
