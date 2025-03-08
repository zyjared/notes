<template>
  <ClientOnly>
    <vue-particles
      id="tsparticles" :options="{
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.3,
            },
          },
        },
        particles: {
          color: {
            value: [
              '#FAF9F6',
              '#aa73ff',
              '#f8c210',
              '#83d238',
              '#8ED2FF',
              '#33b1f8',
            ],
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: 'out',
            random: true,
            speed: 0.3,
          },
          number: {
            density: {
              enable: true,
            },
            value: 390,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 1,
            },
            value: { min: 0.2, max: 1 },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 0.6, max: 2 },
          },
          links: {
            color: {
              value: '#FAF9F6',
            },
            enable: true,
            distance: 39,
            width: 0.75,
            opacity: 0.5,
          },
        },
      }"
    />
  </ClientOnly>
</template>
