import React from "react";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    // Ekran genişliğine göre maksimum görünür sayfa sayısı
    const isLargeDesktop = windowWidth >= 1440;
    const isDesktop = windowWidth >= 1024;
    const isTablet = windowWidth >= 768;
    const isMobile = windowWidth >= 480;

    let maxVisible = 5; // Varsayılan
    if (isLargeDesktop) maxVisible = 12; // Çok büyük ekranlarda 12 sayfa
    else if (isDesktop) maxVisible = 8; // Desktop'ta 8 sayfa
    else if (isTablet) maxVisible = 6; // Tablet'te 6 sayfa
    else if (isMobile) maxVisible = 5; // Mobile'da 5 sayfa
    else maxVisible = 3; // Çok küçük ekranlarda 3 sayfa

    if (totalPages <= maxVisible) {
      // Tüm sayfaları göster
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Her zaman başta ve sonda birkaç sayfa göster, ortada ...
      const startPages = Math.ceil(maxVisible / 3); // Başta gösterilecek sayfa sayısı
      const endPages = Math.ceil(maxVisible / 3); // Sonda gösterilecek sayfa sayısı
      const middlePages = maxVisible - startPages - endPages; // Ortada gösterilecek sayfa sayısı

      // Başta sayfalar
      for (let i = 1; i <= startPages; i++) {
        pages.push(i);
      }

      // Ortada sayfalar veya ...
      if (currentPage <= startPages) {
        // Mevcut sayfa başta, ortada daha fazla sayfa göster
        const remainingStart = startPages - currentPage;
        for (
          let i = startPages + 1;
          i <= startPages + remainingStart + middlePages;
          i++
        ) {
          if (i <= totalPages) pages.push(i);
        }
        if (pages.length < maxVisible && totalPages > pages.length) {
          pages.push("...");
        }
      } else if (currentPage >= totalPages - endPages) {
        // Mevcut sayfa sonda, ortada daha fazla sayfa göster
        const remainingEnd = endPages - (totalPages - currentPage);
        if (pages.length < maxVisible) {
          pages.push("...");
        }
        for (
          let i = Math.max(
            startPages + 1,
            totalPages - remainingEnd - middlePages
          );
          i <= totalPages - endPages;
          i++
        ) {
          if (i > startPages) pages.push(i);
        }
      } else {
        // Mevcut sayfa ortada
        pages.push("...");

        // Mevcut sayfanın etrafında sayfalar
        const halfMiddle = Math.floor(middlePages / 2);
        const start = Math.max(startPages + 1, currentPage - halfMiddle);
        const end = Math.min(totalPages - endPages, currentPage + halfMiddle);

        for (let i = start; i <= end; i++) {
          pages.push(i);
        }

        pages.push("...");
      }

      // Sonda sayfalar
      for (let i = totalPages - endPages + 1; i <= totalPages; i++) {
        if (i > startPages && !pages.includes(i)) {
          pages.push(i);
        }
      }

      // Eğer çok az sayfa varsa, ... kaldır
      if (pages.length <= maxVisible) {
        return pages.filter((page: number | string) => page !== "...");
      }
    }

    return pages;
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === "number" && page !== currentPage) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button
        name="previous page"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        aria-label="Previous page"
      >
        &lt;
      </button>

      {getPageNumbers().map((page, index) => (
        <button
          name="page"
          key={index}
          onClick={() => handlePageClick(page)}
          className={`pagination-item ${
            page === currentPage ? "selected" : ""
          } ${page === "..." ? "break" : ""}`}
          disabled={page === "..."}
          aria-label={page === "..." ? "More pages" : `Page ${page}`}
        >
          {page}
        </button>
      ))}

      <button
        name="next page"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`pagination-item ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        aria-label="Next page"
      >
        &gt;
      </button>
    </div>
  );
};

export default CustomPagination;
