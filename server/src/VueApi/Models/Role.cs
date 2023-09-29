namespace VueApi.Models
{
    public class Role
    {
        public int Id { get; set; }
        public string JobTitle { get; set; }
        public int Salary { get; set; }
        public int DeptId { get; set; }
        public int IsManagement { get; set; }
    }
}
