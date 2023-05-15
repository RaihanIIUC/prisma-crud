-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` INTEGER NOT NULL,
    `proccessing_name` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `market_name` VARCHAR(191) NOT NULL,
    `pack_size_id` INTEGER NOT NULL,
    `variant` VARCHAR(191) NOT NULL,
    `online_selling_price` DECIMAL(10, 2) NOT NULL,
    `inhouse_selling_price` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pack` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `weight` DECIMAL(10, 2) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
