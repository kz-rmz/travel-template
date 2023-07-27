export default function ToursTable({ tours }) {
  return (
    <div>
      <table className='table-fixed w-full border-separate border-spacing-y-5 text-slate-800'>
        <thead>
          <tr className='text-left'>
            <th>Компания</th>
            <th>Длительность</th>
            <th>До мечети аль-Харам</th>
            <th>Отель</th>
            <th>Питание</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour, idx) => {
            return (
              <tr
                key={idx}
                className='border-b-2 border-gray-300 hover:bg-slate-200'
              >
                <td>{tour.travelCompany}</td>
                <td>{tour.duration} дней</td>
                <td>{tour.toHaram}</td>
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
