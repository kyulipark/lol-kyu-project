import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen p-10">
      <h3 className="text-blue-500 text-4xl font-bold"> 챔피언 목록 </h3>
    </div>
  );
};

export default page;

// 내에서 **Server Actions**를 정의하고, 이를 통해 데이터를 가져옵니다. **Server Actions**는 컴포넌트의 렌더링 과정에서 동기적으로 실행되므로, 클라이언트 컴포넌트에서 별도로 데이터를 요청할 필요가 없습니다.

// 3. **데이터 렌더링**

//     가져온 데이터를 컴포넌트에서 매핑하여 목록을 렌더링합니다. 각 항목에 링크를 추가하여 상세 페이지로 이동할 수 있도록 합니다.

// > 💡 Server Actions 사용 시 유의사항:
// >
// > - **Server Components,** **Client Components** 에서 모두 사용할 수 있습니다.
// > - Server action 은 비동기 함수여야 합니다. 반환 타입이 `Promise<T>` 형태임을 유의하세요.
// > - 데이터 페칭 로직을 컴포넌트 내부에 직접 포함시켜 코드의 간결성을 유지합니다.
// > - 각 함수의 반환 타입을 정확하게 명시하여 타입 안전성을 확보하세요.
// > - 함수의 매개변수에도 타입을 지정하여 입력값의 타입을 체크하세요.
