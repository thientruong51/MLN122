import { Typography, Box, Stack, Paper } from '@mui/material';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cardData = [
  {
    title: '3.1 Miếng bánh kinh tế là gì?',
    description:
      'Miếng bánh kinh tế là tổng sản lượng hàng hóa và dịch vụ. Nó được tạo ra từ sản xuất thực tế – từ lao động, máy móc, công nghệ. Nếu chỉ có tiền mà không có hàng hóa thì tiền chẳng có nghĩa lý gì.',
    detail: [
      'Miếng bánh kinh tế là cách ví von tổng sản lượng hàng hóa và dịch vụ mà một quốc gia làm ra.',
      'Nó được tạo ra từ sức lao động, máy móc, công nghệ – tức là từ sản xuất thực tế.',
      'Áp dụng lý luận của C. Mác: sản xuất hàng hóa là nền tảng cốt lõi của nền kinh tế.',
      'Liên hệ hàng hóa có giá trị sử dụng và giá trị trao đổi: Nếu chỉ có tiền mà không có hàng hóa thì tiền không có giá trị.',
      '➡️ Vua Midas có rất nhiều vàng, nhưng khi không thể ăn, không thể sống – thì vàng có ích gì?'
    ],
    image: '/images/3.1.png',
  },
  {
    title: '3.2 Tiền có giá trị tự thân không?',
    description:
      'Tiền không có giá trị nếu không thể dùng để mua thứ có ích. Như Mác nói, tiền là hình thái giá trị trao đổi – không phải mục tiêu. Trên đảo hoang, tiền chỉ là giấy nếu không có hàng hóa.',
    detail: [
      'Hãy tưởng tượng bạn đang ở trên một hoang đảo, có mang theo cả vali đầy tiền – nhưng không có ai bán nước, không có gì để ăn.',
      'Theo Mác: Tiền là hình thái giá trị trao đổi, không tạo ra giá trị sử dụng.',
      '“Tiền không phải là mục tiêu cuối cùng, mà là công cụ để hàng hóa được lưu thông.”',
      '➡️ Của cải thật nằm ở hàng hóa có ích, được sản xuất ra bằng lao động.'
    ],
    image: '/images/3.2.png',
  },
  {
    title: '3.3 Tiền lưu thông hàng hóa thế nào?',
    description:
      'Tiền chỉ có ý nghĩa khi có hàng hóa tương ứng để lưu thông. In quá nhiều tiền mà không có sản xuất → lạm phát. Venezuela là ví dụ điển hình: tiền mất giá vì thiếu hàng hóa.',
    detail: [
      'Tiền giúp chúng ta trao đổi thuận tiện hơn.',
      'Ví dụ Venezuela: In quá nhiều tiền nhưng thiếu hàng hóa → lạm phát.',
      'Theo Mác: Tiền chỉ thực hiện được chức năng lưu thông khi có giá trị hàng hóa tương ứng.',
      '➡️ Khi hàng hóa ít mà tiền nhiều → tiền mất giá.',
      'Mác cảnh báo: “Khi tiền bị tách khỏi sản xuất và hàng hóa – thì nó trở nên công cụ đầu cơ và khủng hoảng tài chính.”'
    ],
    image: '/images/3.3.png',
  },
  {
    title: '3.4 Nhiều tiền hay nhiều hàng hóa tốt hơn?',
    description:
      'Tiền nhiều nhưng không có hàng hóa thì dễ gây lạm phát. Hàng hóa nhiều mới đảm bảo phát triển bền vững, vì có giá trị sử dụng và đáp ứng nhu cầu thực.',
    detail: [
      'So sánh giữa “có nhiều tiền” và “có nhiều hàng hóa”:',
      'Giá trị sử dụng: "Tiền": không có nếu không mua được gì – "Hàng hóa": có thật, đáp ứng nhu cầu sống.',
      'Khả năng trao đổi: "Tiền": bị giới hạn nếu không có ai bán – "Hàng hóa": linh hoạt và thiết thực.',
      'Rủi ro: "Tiền": dễ mất giá nếu không kiểm soát – "Hàng hóa": hỗ trợ phát triển ổn định và bền vững.'
    ],
    image: '/images/3.4.png',
  },
];

const EconomicAnalysis = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          position: 'relative',
          minHeight: '110vh',
          py: 16,
          px: { xs: 2, md: 6 },
          color: '#fff',
        }}
      >
        <Box
          component="video"
          src="/videos/bg-giaithich.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -3,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.47))',
            zIndex: -1,
          }}
        />

        <Typography
          variant="h4"
          fontFamily="serif"
          fontWeight="bold"
          align="center"
          gutterBottom
          color="#f1c40f"
        >
          PHÂN TÍCH – GIẢI ĐÁP CÂU HỎI
        </Typography>
        <Typography
          variant="h5"
          fontFamily="serif"
          fontWeight="bold"
          align="center"
          gutterBottom
          color="#f1c40f"
        >
          Có phải trong mọi nền kinh tế, càng nhiều vàng và tiền thì càng tốt không?
        </Typography>

        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          alignItems="center"
          mt={6}
          flexWrap="wrap"
          zIndex={2}
        >
          {cardData.map((card, index) => (
            <Box key={index} textAlign="center" sx={{ mx: 'auto', mb: 4 }}>
              <motion.div
                whileTap={{ rotateY: 180 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                style={{
                  width: 280,
                  height: 420,
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
              <Typography variant="subtitle1" fontWeight="bold" mt={1}>
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
                  maxWidth: '90%',
                  width: '600px',
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

        <Box
          mt={10}
          zIndex={2}
          position="relative"
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.16)',
            backdropFilter: 'blur(5px)',
            borderRadius: 5,
            px: { xs: 2, md: 4 },
            py: 3,
            maxWidth: '900px',
            mx: 'auto',
          }}
        >
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom color="#f1c40f">
            Kết luận:
          </Typography>
          <Typography variant="h5" align="center" color="#fff">
            "Miếng bánh kinh tế" được tạo ra từ lao động, từ sản phẩm, không phải từ việc in thêm tiền. Nếu không có hàng hóa, tiền chỉ là giấy không hơn không kém.
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default EconomicAnalysis;