/*
  Warnings:

  - You are about to drop the column `animalId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `inStack` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the `Animal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Item` DROP FOREIGN KEY `Item_animalId_fkey`;

-- DropForeignKey
ALTER TABLE `Item` DROP FOREIGN KEY `Item_categoryId_fkey`;

-- AlterTable
ALTER TABLE `Item` DROP COLUMN `animalId`,
    DROP COLUMN `categoryId`,
    DROP COLUMN `inStack`,
    DROP COLUMN `size`,
    ADD COLUMN `brandId` INTEGER NULL,
    ADD COLUMN `inStock` INTEGER NULL;

-- DropTable
DROP TABLE `Animal`;

-- CreateTable
CREATE TABLE `CategoriesOnItems` (
    `itemId` INTEGER NOT NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`itemId`, `categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Brand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `Brand`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriesOnItems` ADD CONSTRAINT `CategoriesOnItems_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `Item`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriesOnItems` ADD CONSTRAINT `CategoriesOnItems_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
