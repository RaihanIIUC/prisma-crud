-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_pack_size_id_fkey` FOREIGN KEY (`pack_size_id`) REFERENCES `Pack`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
