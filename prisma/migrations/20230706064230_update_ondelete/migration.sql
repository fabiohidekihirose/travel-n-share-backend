-- DropForeignKey
ALTER TABLE "follow" DROP CONSTRAINT "follow_user_id_ed_fkey";

-- DropForeignKey
ALTER TABLE "follow" DROP CONSTRAINT "follow_user_id_er_fkey";

-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_user_id_fkey";

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_user_id_ed_fkey" FOREIGN KEY ("user_id_ed") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_user_id_er_fkey" FOREIGN KEY ("user_id_er") REFERENCES "user_account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
