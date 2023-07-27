export default function ToursTable({ tours }) {
  return (
    <div>
      <table className='table-fixed w-full'>
        <thead>
          <tr className='text-left'>
            <th>Компания</th>
            <th>Кол-во дней</th>
            <th>Отель</th>
            <th>Питание</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour, idx) => {
            return (
              <tr key={idx} className='border-b-2 border-gray-300'>
                <td>{tour.travelCompany}</td>
                <td>{tour.duration}</td>
                <td>{tour.hotel}</td>
                <td>{tour.meals ? "V" : "X"}</td>
                <td>{tour.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
