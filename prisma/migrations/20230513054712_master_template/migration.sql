/*
  Warnings:

  - You are about to drop the `Tweet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Tweet` DROP FOREIGN KEY `Tweet_userId_fkey`;

-- DropTable
DROP TABLE `Tweet`;

-- DropTable
DROP TABLE `User`;
