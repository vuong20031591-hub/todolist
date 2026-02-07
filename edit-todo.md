# Chức năng: Sửa Todo

## Mô tả
Cho phép người dùng chỉnh sửa thông tin của một task đã tồn tại trong danh sách todo.

## Yêu cầu chức năng
- Người dùng click vào nút "Edit" trên task
- Hiển thị form với thông tin hiện tại của task
- Người dùng có thể sửa:
  - Tiêu đề task
  - Mô tả
  - Độ ưu tiên
  - Ngày hết hạn
  - Trạng thái (Chưa hoàn thành/Đã hoàn thành)
- Hiển thị thông báo thành công sau khi cập nhật

## Giao diện
- Form chỉnh sửa với các trường:
  - Tiêu đề (bắt buộc, pre-filled)
  - Mô tả (tùy chọn, pre-filled)
  - Độ ưu tiên (dropdown, pre-selected)
  - Ngày hết hạn (date picker, pre-filled)
  - Trạng thái (checkbox)
- Nút "Lưu thay đổi"
- Nút "Hủy"

## Validation
- Tiêu đề không được để trống
- Tiêu đề tối đa 200 ký tự
- Mô tả tối đa 1000 ký tự
- Không cho phép sửa nếu không có thay đổi

## Xử lý lỗi
- Hiển thị lỗi nếu task không tồn tại
- Hiển thị lỗi nếu cập nhật thất bại
- Confirm trước khi hủy nếu có thay đổi chưa lưu

## Người thực hiện
Nguyễn Tiến Vương - Team Lead
