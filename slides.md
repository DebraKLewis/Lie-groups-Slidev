---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Lie Groups F26
info: Lecture notes for Math 227, Lie Groups, Fall 2026. 

# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
# duration of the presentation
duration: 35min

---

# Lie Groups

This will hopefully become slides for Lie Groups

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>

---

Table of contents (concise)

<div class="text-sm class:children:text-xs">
  <Toc  columns="3" minDepth="1" maxDepth="2" />
</div>

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel, [learn more](https://sli.dev/guide/ui#navigation-bar)

## Keyboard Shortcuts

|                                                     |                             |
| --------------------------------------------------- | --------------------------- |
| <kbd>right</kbd> / <kbd>space</kbd>                 | next animation or slide     |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd>                                       | previous slide              |
| <kbd>down</kbd>                                     | next slide                  |
| <kbd>g</kbd>                                        | 'go to': search             |
| <kbd>o</kbd>                                        | 'overview': grid of slides  |

<!-- https://sli.dev/guide/animations.html#click-animation -->
<img
  v-click
  class="absolute -bottom-9 -left-7 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
  alt=""
/>
<p v-after class="absolute bottom-23 left-45 opacity-30 transform -rotate-10">Here!</p>
---

# Overview of Lie groups and algebras

---
src: LieGroupsSlides/manifoldsLieGroups.md
---

---
src: LieGroupsSlides/SUT_notes.md
---

---
src: LieGroupsSlides/representations.md
---

---

# Fundamentals of Lie groups

- The exponential map 

- Lie brackets

- Analytical results commonly used to demonstrate a group is a Lie group

- Lie subgroups 

- Lie's Theorems

---
src: LieGroupsSlides/exponential.md
---

---
src: LieGroupsSlides/bracketStuff.md
---

---
src: LieGroupsSlides/topologyIVF.md
---

---
src: LieGroupsSlides/subgroups.md
---

---
src: LieGroupsSlides/closeLieSubgroupsProof.md
---

---
src: LieGroupsSlides/Lies3Theorems.md
---

---

# Invariants and geometric mechanics

---
src: LieGroupsSlides/Haar_measure.md
---

---
src: LieGroupsSlides/HaarRiemannPoisson.md
---

---
src: LieGroupsSlides/PoissonManifolds.md
---

---
src: LieGroupsSlides/symplecticManifolds.md
---

---
src: LieGroupsSlides/symplecticPoisson2.md
---

---
src: LieGroupsSlides/symplecticAppendix.md
---

---
src: LieGroupsSlides/PoissonConservedQuantities.md
---

---
src: LieGroupsSlides/momentumMapsCoadjointOrbits.md
---

---

# Representation Theory 

---
src: LieGroupsSlides/solvable_nilpotent.md
---

---
src: LieGroupsSlides/nilpotent_solvable_revised.md
---

---
src: LieGroupsSlides/nilpotent_solvable_contd.md
---

---
src: LieGroupsSlides/semi-simple.md
---

---
src: LieGroupsSlides/Lie_Engel_reducible_semisimple.md
---

---
src: LieGroupsSlides/Borcherds_nilpotent_solvable_fragments.md
---

---
src: LieGroupsSlides/(ir)reducible_representations.md
---

---
src: LieGroupsSlides/(ir)reducible_representations_contd.md
---

---
src: LieGroupsSlides/a_few_representations.md
---

---
# Exercises

---

---
src: LieGroupsSlides/Killing_form_structure_algebras_compact_groups.md
---

---
src: LieGroupsSlides/structure_algebras_compact_groups.md
---

---
src: LieGroupsSlides/matrix_elements.md
---

---
src: LieGroupsSlides/max_toral_subalgebras_root_spaces.md
---

---
src: LieGroupsSlides/root_systems_classification.md
---

---
src: LieGroupsSlides/reps_sl3.md
---

---
src: LieGroupsSlides/characters_lead-in_slides.md
---

---
src: LieGroupsSlides/characters.md
---

---
src: LieGroupsSlides/chars.md
---

---

# Exercises

---
src: LieGroupsSlides/infinitesimal_rotations_exercise.md
---

---
src: LieGroupsSlides/exercises2.md
---

---
src: LieGroupsSlides/spherical_harmonics_exercises.md
---