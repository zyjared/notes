<!-- eslint-disable ts/ban-ts-comment -->
<script setup lang="ts">
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { onMounted, useTemplateRef } from 'vue'
// @ts-ignore
import modelURL from './assets/leafeon.glb?url'

const { size = 300, scale = 2 } = defineProps<{
  size?: number
  scale?: number
}>()

const elRef = useTemplateRef<HTMLElement>('el')

onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  })

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  renderer.setSize(size, size)
  elRef.value?.appendChild(renderer.domElement)

  camera.position.z = 3
  camera.position.y = 2
  camera.position.x = -0.5

  // 光
  // ----------------------------------------

  const light = new THREE.AmbientLight(0xFFFFFF)
  scene.add(light)

  camera.position.z = 5

  const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.5)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1.0)
  directionalLight.position.set(5, 5, 5)
  scene.add(directionalLight)

  const fillLight = new THREE.DirectionalLight(0xFFFFFF, 0.8)
  fillLight.position.set(-5, 0, -5)
  scene.add(fillLight)

  // 模型
  // ----------------------------------------

  let mixer: THREE.AnimationMixer
  const clock = new THREE.Clock()

  const loader = new GLTFLoader()
  loader.load(modelURL, (gltf) => {
    scene.add(gltf.scene)

    gltf.scene.scale.set(scale, scale, scale)
    gltf.scene.rotation.y = -0.35 * Math.PI
    gltf.scene.rotation.x = 0.05 * Math.PI

    mixer = new THREE.AnimationMixer(gltf.scene)
    const animations = gltf.animations

    if (animations && animations.length) {
      const action = mixer.clipAction(animations[0])
      action.play()
    }
  })

  function animate() {
    requestAnimationFrame(animate)
    if (mixer) {
      const delta = clock.getDelta()
      mixer.update(delta)
    }
    renderer.render(scene, camera)
  }
  animate()
})
</script>

<template>
  <div ref="el" class="model-container" />
</template>
