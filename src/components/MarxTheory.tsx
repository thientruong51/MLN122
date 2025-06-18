// src/components/MarxTheory.tsx
import { Typography, Box, Stack, Paper } from '@mui/material';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cardData = [
  {
    title: '2.1 Sản xuất hàng hóa là gì?',
    description:
      'Sản xuất hàng hóa là một kiểu tổ chức kinh tế, trong đó các sản phẩm được tạo ra không phải để người sản xuất tiêu dùng trực tiếp, mà để đem trao đổi trên thị trường nhằm thỏa mãn nhu cầu của người khác.',
    detail: [
      '• Theo C. Mác, sản xuất hàng hóa chỉ hình thành và phát triển khi hội đủ hai điều kiện cơ bản:',
      '• Phân công lao động xã hội: Mỗi người, mỗi ngành đảm nhiệm một phần riêng biệt trong quá trình sản xuất.',
      '• Tách biệt về sở hữu tư liệu sản xuất: Các cá nhân, tổ chức sở hữu riêng tư liệu sản xuất → không thể tự cung tự cấp → buộc phải trao đổi.',
      '• Do đó, trao đổi hàng hóa trở thành tất yếu, và chính nó là nền tảng ra đời của tiền tệ và thị trường.'
    ],
    image: '/images/marx1.png',
  },
  {
    title: '2.2 Hàng hóa có gì đặc biệt?',
    description:
      'Theo C. Mác, hàng hóa là sản phẩm của lao động được tạo ra để trao đổi, và nó có hai thuộc tính cơ bản: Giá trị sử dụng và Giá trị trao đổi.',
    detail: [
      '• Giá trị sử dụng: Công dụng thực tế để thỏa mãn nhu cầu.',
      '• Giá trị trao đổi: Là tỷ lệ đổi lấy hàng hóa hoặc tiền, phản ánh lao động xã hội trừu tượng.',
      '• C. Mác nhấn mạnh: “Không có giá trị sử dụng thì hàng hóa không có giá trị trao đổi.”',
      '• Mâu thuẫn thống nhất: Giá trị sử dụng mang tính cụ thể, còn giá trị trao đổi mang tính xã hội.'
    ],
    image: '/images/marx1.jpg',
  },
  {
    title: '2.3 Tiền tệ và vàng trong lý luận Mác',
    description:
      'Vàng trở thành tiền tệ – đại diện cho giá trị trao đổi hàng hóa.',
    detail: [
      ' 5 chức năng của tiền:',
      '• Thước đo giá trị',
      '• Phương tiện lưu thông',
      '• Phương tiện cất trữ',
      '• Phương tiện thanh toán',
      '• Tiền tệ thế giới',
      '➡️ Tiền không tạo ra giá trị, mà là phương tiện lưu thông giá trị.'
    ],
    image: '/images/marx3.png',
  },
  {
    title: '2.4 Dịch vụ và hàng hóa hiện đại',
    description:
      'Không chỉ sản phẩm vật chất, mà dịch vụ, phần mềm, giáo dục,... cũng là hàng hóa nếu do lao động tạo ra và thỏa mãn nhu cầu.',
    detail: [
      '• Có sự đầu tư trí tuệ, kỹ năng, công sức',
      '• Có người cần và sẵn sàng trao đổi',
      '• Mác: “Mọi sản phẩm lao động, nếu có ích và được sản xuất để trao đổi, đều là hàng hóa.”'
    ],
    image: '/images/marx2.png',
  },
];

const MarxTheory = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          position: 'relative',
          minHeight: '110vh',
          py: 16,
          px: { xs: 2, md: 10 },
          backgroundImage: 'url(/images/bg-mac.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)',
          backgroundBlendMode: 'darken',
          color: '#fff',
        }}
      >
        <Typography
          variant="h3"
          fontFamily="serif"
          fontWeight="bold"
          align="center"
          gutterBottom
          color="#f1c40f"
        >
          Lý luận C. Mác về hàng hóa và tiền tệ
        </Typography>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="center"
          alignItems="center"
          mt={6}
          flexWrap="wrap"
        >
          {cardData.map((card, index) => (
            <Box key={index} textAlign="center">
              <motion.div
                whileTap={{ rotateY: 180 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                style={{
                  width: 320,
                  height: 460,
                  perspective: 1000,
                  cursor: 'pointer',
                  marginBottom: '0.5rem',
                }}
                onClick={() => {
                  setFlippedIndex(index);
                  setTimeout(() => setActiveIndex(index), 500);
                }}
              >
                <motion.div
                  animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    borderRadius: 8,
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                  }}
                >
                  <Box
                    component="img"
                    src={card.image}
                    alt={card.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'fill',
                      backfaceVisibility: 'hidden',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                  />
                </motion.div>
              </motion.div>
              <Typography variant="h6" fontWeight="bold" mt={3}>
                {card.title}
              </Typography>
            </Box>
          ))}
        </Stack>

        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0,0,0,0.75)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 999,
              }}
              onClick={() => {
                setActiveIndex(null);
                setFlippedIndex(null);
              }}
            >
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: '#fff',
                  color: '#111',
                  padding: '2rem',
                  borderRadius: '12px',
                  maxWidth: '600px',
                  width: '90%',
                }}
              >
                <Typography variant="h5" fontWeight="bold" mb={2}>
                  {cardData[activeIndex].title}
                </Typography>
                <Typography variant="body1" mb={2}>
                  {cardData[activeIndex].description}
                </Typography>
                <Stack spacing={2}>
                  {cardData[activeIndex].detail.map((line, i) => (
                    <Paper
                      key={i}
                      elevation={2}
                      sx={{
                        px: 2,
                        py: 1,
                        bgcolor: '#f9f9f9',
                        borderLeft: '4px solid #f1c40f',
                      }}
                    >
                      <Typography variant="body2" color="black">
                        {line}
                      </Typography>
                    </Paper>
                  ))}
                </Stack>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </motion.div>
  );
};

export default MarxTheory;