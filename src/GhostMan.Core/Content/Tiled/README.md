# Stage 001 — Neon Ruins

POC de mapa ortogonal para Tiled/MonoGame.Extended.

- Dimensão: `40 x 22` células (`640 x 352` px em resolução nativa).
- Layout: labirinto ramificado com rotas conectadas; corredores de `1` tile e conexões nunca maiores que `2` tiles.
- POC single-player: `1` fantasma controlado pelo jogador + `2` ghosts helpers de IA; `ControlTransferOnDeath=true` no mapa.
- Tile grid: `16 x 16` px; atlas: `128 x 64` px, 32 tiles, 8 colunas.
- Identidade visual: ruínas noturnas com energia neon; evita a paleta e os ícones clássicos de Pac-Man.
- Camadas: `Arena` (piso e colisões), `Gameplay` (comestíveis, armadilhas e marcadores visuais), `SpawnPoints` (jogador, dois helpers e saída).
- Propriedades do tileset: `Collision=Solid|Passable` e `Interaction=Consumable|Trap|Spawn|Exit`.

## Arquivos

- `Source/Stage_001.png`: atlas pixel art, renderização nearest-neighbor recomendada.
- `Tilesets/Stage_001.tsx`: definição externa do tileset.
- `Stages/Stage_001.tmx`: mapa da arena, referenciando o `.tsx` por caminho relativo.

## Escala de renderização

Desenhe a câmera usando escala inteira sempre que possível (`2x`, `3x`, `4x`, ...), com `SamplerState.PointClamp`. Em telas mobile com proporção diferente, mantenha a grade de 16 px e use letterbox ou viewport recortado; não aplique filtragem bilinear ao atlas.
