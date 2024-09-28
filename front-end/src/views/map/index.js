import { onMounted, ref } from 'vue';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

export default {
  name: 'MapView',
  setup() {
    const map = ref(null);

    onMounted(() => {
      map.value = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([-52.840089, -27.299559]), // Coordenadas iniciais (pode alterar conforme necessário)
          zoom: 17,
        }),
      });
    });

    return {
      map,
    };
  },
};