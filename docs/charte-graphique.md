# Charte graphique — COF'FREE 🌿

Source : [`assets/css/style.css`](../assets/css/style.css)
Identité : duo **vert profond / beige naturel** évoquant le café et l'écologie, formes arrondies et animations douces.

---

## 🎨 Couleurs

### Principales
| Rôle | Variable | Hex |
|------|----------|-----|
| Vert principal | `--primary` | `#18432f` |
| Vert foncé | `--primary-dark` | `#102e20` |
| Vert clair | `--primary-light` | `#225c3f` |
| Beige (secondaire) | `--secondary` | `#f0e8db` |

> `#nav` et `#footer` utilisent une variante : `#16432f`.

### Fonctionnelles & neutres
| Rôle | Variable | Hex |
|------|----------|-----|
| Blanc | `--white` | `#ffffff` |
| Noir | `--black` | `#000000` |
| Fond | `--bg` | `#fafafa` |
| Bordure | `--border` | `#e0e0e0` |
| Texte | `--text-dark` | `#333333` |
| Gris | `--grey` | `#999999` |
| Gris foncé | `--dark-grey` | `#666666` |
| Gris clair | `--light-grey` | `#cccccc` |
| Highlight (focus) | `--highlight` | `#FFD700` |
| Erreur | `--error` | `#b00020` |
| Succès (feedback) | — | `#4ade80` |

---

## ✍️ Typographie

- **Police** : `Inter`, fallback `Segoe UI`, sans-serif
- **Base** : 16px · interligne 1.6
- **Titres** : poids 800, letter-spacing négatif, tailles fluides

| Élément | Taille |
|---------|--------|
| H1 (hero) | `clamp(2.2rem, 5vw, 3.6rem)` — poids 800 |
| H2 (sections) | `clamp(1.8rem, 4vw, 2.6rem)` — poids 800 |
| H2 (highlights) | `clamp(1.5rem, 3vw, 2.1rem)` |
| Corps | 16px / `0.9–1.1rem` |
| Eyebrow / labels | `0.72–0.82rem`, majuscules, letter-spacing élevé |

---

## 🔘 Boutons

Forme **pilule** (`border-radius: 50px`), poids 600, lift `translateY(-2px)` au survol.

| Variante | Fond | Texte |
|----------|------|-------|
| `.btn-primary` | Vert | Blanc |
| `.btn-outline` | Transparent | Blanc + bordure |
| `.btn-nav` / `.btn-cta` | Beige | Vert |

---

## 📐 Tokens de style

| Token | Valeur |
|-------|--------|
| `--radius` | `12px` (cartes) · `50px` (boutons/pilules) |
| `--shadow` | `0 4px 24px rgba(0,0,0,0.10)` |
| `--shadow-lg` | `0 12px 48px rgba(0,0,0,0.18)` |
| `--transition` | `0.3s ease` |

### Sections
- `.section` : padding `100px 0` (72px en mobile)
- `.section-light` (fond `#fafafa`), `.section-beige` (beige), `.section-dark` (vert)

---

## ✨ Effets signatures

- Dégradés verts (`linear-gradient` 150°) sur le hero
- Halos radiaux beiges translucides (`rgba(240,232,219,0.08–0.15)`)
- Micro-animations : `bounce` (scroll hint), `faqOpen`, `modalIn`, flux animé des étapes
- Cartes : lift au survol + ombre renforcée

---

## ♿ Accessibilité

- `:focus-visible` → outline doré `#FFD700`, 3px, offset 3px
- `scroll-behavior: smooth`

---

## 📱 Responsive (breakpoints)

| Largeur max | Adaptations clés |
|-------------|------------------|
| `900px` | Grilles features/charte en 1 colonne, hero empilé |
| `768px` | Menu burger, nav masquée, sections réduites |
| `640px` | Modale contact mono-colonne |
| `520px` | Formulaires et actions empilés en pleine largeur |
