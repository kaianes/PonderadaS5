import PropTypes from 'prop-types';

export default function Card({ titulo, descricao }) {
  return (
    <div className="w-48 min-h-56 rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:shadow-md hover:scale-105 hover:cursor-pointer">
      <div
        className="px-4 py-2 bg-white rounded-b overflow-hidden"
        style={{ height: '170px' }}
      >
        <h3
          className="text-base truncate font-bold mb-3.5 mt-1.5"
          title={titulo}
        >
          {titulo}
        </h3>
        <p
          className="text-xs line-clamp-5 leading-relaxed text-neutral-grey"
          title={descricao}
        >
          {descricao}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  imagem: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};
