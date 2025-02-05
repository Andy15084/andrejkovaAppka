import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '2rem 0' }}>
      <Typography variant="h3" gutterBottom>
        O nás
      </Typography>
      <Box sx={{ textAlign: 'justify', marginBottom: '1.5rem' }}>
        <Typography variant="body1">
          Naša firma sa špecializuje na IT sieťové riešenia. Poskytujeme kompletné služby v oblasti
          návrhu, implementácie a údržby IT infraštruktúry. Naším cieľom je pomôcť firmám zlepšiť
          ich technologickú základňu a poskytnúť im spoľahlivé riešenia na mieru.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          Naša vízia je pomôcť firmám optimalizovať ich sieťovú infraštruktúru a dosiahnuť maximálnu
          efektivitu. Veríme v inovácie, ktoré zjednodušujú a zefektívňujú podnikanie našich klientov.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          Sme tu pre našich klientov, aby sme im pomohli so zabezpečením dát, optimalizáciou sietí
          a podporou moderných technológií. Vďaka našim odborníkom si môžete byť istí, že vaše
          technické potreby sú v tých najlepších rukách.
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom>
        Naša misia
      </Typography>
      <Box sx={{ textAlign: 'justify' }}>
        <Typography variant="body1">
          Naším cieľom je poskytovať kvalitné a spoľahlivé riešenia, ktoré zodpovedajú potrebám
          našich klientov a pomáhajú im rásť. Veríme v partnerský prístup, ktorý nám umožňuje
          navrhovať riešenia šité na mieru a prispôsobiť ich každému jednotlivému zákazníkovi.
        </Typography>
      </Box>

      <Typography variant="h5" gutterBottom sx={{ marginTop: '2rem' }}>
        Spojte sa s nami
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
          Sme aktívni na sociálnych sieťach a neustále sa snažíme rozširovať našu komunitu. Spojte
          sa s nami na:
        </Typography>
        <Box>
          <Link href="https://www.facebook.com/mojafirma" target="_blank" sx={{ marginRight: '1rem' }}>
            <Typography variant="body1" sx={{ display: 'inline', color: 'primary.main' }}>
              Facebook
            </Typography>
          </Link>
          <Link href="https://www.instagram.com/mojafirma" target="_blank" sx={{ marginRight: '1rem' }}>
            <Typography variant="body1" sx={{ display: 'inline', color: 'primary.main' }}>
              Instagram
            </Typography>
          </Link>
          <Link href="https://zochova.sk/" target="_blank">
            <Typography variant="body1" sx={{ display: 'inline', color: 'primary.main' }}>
              mojazochova.sk
            </Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
